"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import { createClient } from "@/lib/supabase/client";
import type { Post, PostType } from "@/lib/supabase/posts";
import { logActivity } from "@/lib/supabase/logging";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import {
  Select, SelectContent, SelectItem, SelectTrigger, SelectValue,
} from "@/components/ui/select";
import {
  Plus, Pencil, Trash2, Search, ChevronLeft, ChevronRight,
} from "lucide-react";

const PAGE_SIZE = 20;
const POST_TYPES: PostType[] = ["Guide", "Article", "Case Study", "Video"];

export default function PostsClient({ initialPosts }: { initialPosts: Post[] }) {
  const [posts, setPosts] = useState(initialPosts);

  // Filters
  const [search, setSearch] = useState("");
  const [filterType, setFilterType] = useState("all");
  const [filterStatus, setFilterStatus] = useState("all");
  const [page, setPage] = useState(1);

  const filtered = useMemo(() => {
    return posts.filter((post) => {
      if (filterType !== "all" && post.type !== filterType) return false;
      if (filterStatus === "published" && !post.published) return false;
      if (filterStatus === "draft" && post.published) return false;
      if (search) {
        const q = search.toLowerCase();
        return (
          post.title.toLowerCase().includes(q) ||
          post.slug.toLowerCase().includes(q) ||
          post.description?.toLowerCase().includes(q)
        );
      }
      return true;
    });
  }, [posts, search, filterType, filterStatus]);

  const totalPages = Math.max(1, Math.ceil(filtered.length / PAGE_SIZE));
  const safePage = Math.min(page, totalPages);
  const paginated = filtered.slice((safePage - 1) * PAGE_SIZE, safePage * PAGE_SIZE);

  // Reset to page 1 when filters change
  const updateSearch = (v: string) => { setSearch(v); setPage(1); };
  const updateType = (v: string) => { setFilterType(v); setPage(1); };
  const updateStatus = (v: string) => { setFilterStatus(v); setPage(1); };

  const togglePublish = async (post: Post) => {
    const supabase = createClient();
    await supabase
      .from("posts")
      .update({ published: !post.published })
      .eq("id", post.id);
    await logActivity("update", "posts", `${!post.published ? "Published" : "Unpublished"} post: ${post.title}`);
    setPosts((prev) =>
      prev.map((p) =>
        p.id === post.id ? { ...p, published: !p.published } : p
      )
    );
  };

  const deletePost = async (post: Post) => {
    if (!confirm(`Delete "${post.title}"? This cannot be undone.`)) return;
    const supabase = createClient();
    await supabase.from("posts").delete().eq("id", post.id);
    await logActivity("delete", "posts", `Deleted post: ${post.title}`);
    setPosts((prev) => prev.filter((p) => p.id !== post.id));
  };

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-bold">Posts</h1>
        <Button asChild size="sm">
          <Link href="/admin/posts/new">
            <Plus className="w-4 h-4 mr-1" /> New Post
          </Link>
        </Button>
      </div>

      {/* Filters */}
      <div className="flex gap-3 mb-6 flex-wrap">
        <div className="relative flex-1 min-w-[200px]">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
          <Input
            className="pl-9"
            placeholder="Search posts…"
            value={search}
            onChange={(e) => updateSearch(e.target.value)}
          />
        </div>
        <Select value={filterType} onValueChange={updateType}>
          <SelectTrigger className="w-40"><SelectValue placeholder="Type" /></SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Types</SelectItem>
            {POST_TYPES.map((t) => (
              <SelectItem key={t} value={t}>{t}</SelectItem>
            ))}
          </SelectContent>
        </Select>
        <Select value={filterStatus} onValueChange={updateStatus}>
          <SelectTrigger className="w-40"><SelectValue placeholder="Status" /></SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Status</SelectItem>
            <SelectItem value="published">Published</SelectItem>
            <SelectItem value="draft">Draft</SelectItem>
          </SelectContent>
        </Select>
      </div>

      {posts.length === 0 ? (
        <p className="text-muted-foreground text-sm py-12 text-center">
          No posts yet.{" "}
          <Link href="/admin/posts/new" className="text-primary underline">
            Create your first one.
          </Link>
        </p>
      ) : filtered.length === 0 ? (
        <p className="text-muted-foreground text-sm py-12 text-center">
          No posts match your filters.
        </p>
      ) : (
        <>
          <div className="border border-border rounded-xl overflow-hidden">
            <table className="w-full text-sm">
              <thead className="bg-secondary border-b border-border">
                <tr>
                  <th className="text-left px-4 py-3 font-medium">Title</th>
                  <th className="text-left px-4 py-3 font-medium hidden md:table-cell">
                    Type
                  </th>
                  <th className="text-left px-4 py-3 font-medium">Status</th>
                  <th className="text-left px-4 py-3 font-medium hidden sm:table-cell">
                    Date
                  </th>
                  <th className="px-4 py-3 w-20"></th>
                </tr>
              </thead>
              <tbody>
                {paginated.map((post, i) => (
                  <tr
                    key={post.id}
                    className={
                      i < paginated.length - 1 ? "border-b border-border" : ""
                    }
                  >
                    <td className="px-4 py-3 font-medium max-w-[220px] truncate">
                      {post.title}
                    </td>
                    <td className="px-4 py-3 hidden md:table-cell">
                      <Badge variant="secondary">{post.type}</Badge>
                    </td>
                    <td className="px-4 py-3">
                      <button
                        onClick={() => togglePublish(post)}
                        className="focus:outline-none"
                        title="Toggle publish status"
                      >
                        <Badge
                          variant={post.published ? "default" : "outline"}
                          className="cursor-pointer"
                        >
                          {post.published ? "Published" : "Draft"}
                        </Badge>
                      </button>
                    </td>
                    <td className="px-4 py-3 text-muted-foreground hidden sm:table-cell">
                      {post.date}
                    </td>
                    <td className="px-4 py-3">
                      <div className="flex items-center gap-1 justify-end">
                        <Button asChild size="sm" variant="ghost">
                          <Link href={`/admin/posts/${post.id}/edit`}>
                            <Pencil className="w-3.5 h-3.5" />
                          </Link>
                        </Button>
                        <Button
                          size="sm"
                          variant="ghost"
                          onClick={() => deletePost(post)}
                        >
                          <Trash2 className="w-3.5 h-3.5 text-destructive" />
                        </Button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>

            {/* Footer with count + pagination */}
            <div className="flex items-center justify-between px-4 py-2 bg-secondary border-t border-border">
              <p className="text-xs text-muted-foreground">
                Showing {(safePage - 1) * PAGE_SIZE + 1}–{Math.min(safePage * PAGE_SIZE, filtered.length)} of {filtered.length} posts
              </p>
              {totalPages > 1 && (
                <div className="flex items-center gap-1">
                  <Button
                    size="sm"
                    variant="ghost"
                    disabled={safePage <= 1}
                    onClick={() => setPage(safePage - 1)}
                  >
                    <ChevronLeft className="w-4 h-4" />
                  </Button>
                  {Array.from({ length: totalPages }, (_, i) => i + 1)
                    .filter((p) => p === 1 || p === totalPages || Math.abs(p - safePage) <= 1)
                    .reduce<(number | "ellipsis")[]>((acc, p, idx, arr) => {
                      if (idx > 0 && p - (arr[idx - 1] as number) > 1) acc.push("ellipsis");
                      acc.push(p);
                      return acc;
                    }, [])
                    .map((item, idx) =>
                      item === "ellipsis" ? (
                        <span key={`e-${idx}`} className="px-1 text-xs text-muted-foreground">…</span>
                      ) : (
                        <Button
                          key={item}
                          size="sm"
                          variant={item === safePage ? "default" : "ghost"}
                          className="w-8 h-8 p-0 text-xs"
                          onClick={() => setPage(item)}
                        >
                          {item}
                        </Button>
                      )
                    )}
                  <Button
                    size="sm"
                    variant="ghost"
                    disabled={safePage >= totalPages}
                    onClick={() => setPage(safePage + 1)}
                  >
                    <ChevronRight className="w-4 h-4" />
                  </Button>
                </div>
              )}
            </div>
          </div>
        </>
      )}
    </div>
  );
}
