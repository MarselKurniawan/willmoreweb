import { CalendarDays } from "lucide-react";

const postingDate = new Intl.DateTimeFormat("id-ID", {
  timeZone: "Asia/Jakarta", day: "numeric", month: "long", year: "numeric",
});
const postingTime = new Intl.DateTimeFormat("id-ID", {
  timeZone: "Asia/Jakarta", hour: "2-digit", minute: "2-digit", hourCycle: "h23",
});

export function ArticlePublished({ publishedAt }: { publishedAt?: string | undefined }) {
  if (!publishedAt) return <span className="article-date article-date-unknown"><CalendarDays size={14} aria-hidden="true" />Tanggal posting belum tercatat</span>;
  const date = new Date(publishedAt);
  return <time className="article-date" dateTime={publishedAt}><CalendarDays size={14} aria-hidden="true" />{postingDate.format(date)} · {postingTime.format(date).replace(".", ":")} WIB</time>;
}