we are using now. 

User A → follows → User B  
User A → follows → User C  
User B → follows → User D 

graph  

“Who do I follow?”
“Who follows me?”
“Mutual followers?”
“Suggested users?”


When user opens app → what posts should show?

Get users I follow → get their posts

FAN-OUT STRATEGY

User A posts
→ find all followers of A
→ push postId into each follower’s feed





(YOU NOW)

Fan-out on READ

// pseudo
const following = getFollowing(userId);
const posts = getPosts(following);




(Later)

Introduce feed collection

Feed:
{
  userId,
  posts: [postId1, postId2]
}



Follow Service → gives following list
Post Service → gives posts
Feed Service → combines