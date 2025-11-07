// import { getProfileByUsername, getUserLikedPosts, getUserPosts, isFollowing } from "@/actions/profile.action";
// import { notFound } from "next/navigation";
// import ProfilePageClient from "./ProfilePageClient";

// export async function generateMetadata({ params } : {params: {username: string}}) {
//   const user = await getProfileByUsername(params.username);
//   if (!user) return;

//   return {
//     title: `${user.name ?? user.username}`,
//     description: user.bio || `Check out ${user.username}'s profile.`,
//   };
// }

// async function ProfilePageServer({ params } : {params: {username: string}}) {
//   // console.log("params:", params);
//   const user = await getProfileByUsername(params.username);
//   if(!user) notFound();

//   const [posts, likedPosts, isCurrentUserFollowing] = await Promise.all([
//     getUserPosts(user.id),
//     getUserLikedPosts(user.id),
//     isFollowing(user.id),
//   ]);

//   //loading for 3 sec
//   // await new Promise((resolve) => setTimeout(resolve, 3000));

//   // throw new Error("404 aliens are here");

//   return (
//     <ProfilePageClient
//       user={user}
//       posts={posts}
//       likedPosts={likedPosts}
//       isFollowing={isCurrentUserFollowing}
//     />
//   );
// }

// export default ProfilePageServer;

import { getProfileByUsername, getUserLikedPosts, getUserPosts, isFollowing } from "@/actions/profile.action";
import { notFound } from "next/navigation";
import ProfilePageClient from "./ProfilePageClient";

export async function generateMetadata({ params }: { params: Promise<{ username: string }> }) {
  const { username } = await params;
  const user = await getProfileByUsername(username);
  
  if (!user) return;
  
  return {
    title: `${user.name ?? user.username}`,
    description: user.bio || `Check out ${user.username}'s profile.`,
  };
}

async function ProfilePageServer({ params }: { params: Promise<{ username: string }> }) {
  const { username } = await params;
  
  console.log("Looking for username:", username);
  const user = await getProfileByUsername(username);
  console.log("Found user:", user);
  
  if (!user) {
    console.log("User not found, triggering 404");
    notFound();
  }
  
  const [posts, likedPosts, isCurrentUserFollowing] = await Promise.all([
    getUserPosts(user.id),
    getUserLikedPosts(user.id),
    isFollowing(user.id),
  ]);
  
  return (
    <ProfilePageClient
      user={user}
      posts={posts}
      likedPosts={likedPosts}
      isFollowing={isCurrentUserFollowing}
    />
  );
}

export default ProfilePageServer;