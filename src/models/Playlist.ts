export default interface Playlist {
  title: string;
  songs: any[];
  coverUrl: string;
  type: "playlist" | "artist";
}
