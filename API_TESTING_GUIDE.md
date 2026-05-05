# 🚀 API Gateway - Complete API Documentation & Testing Guide

## 📌 Base URL
```
http://localhost:3000
```

---

## 🔐 Authentication

All protected endpoints require a Bearer token in the Authorization header:
```
Authorization: Bearer <your_jwt_token>
```

---

## 📚 API Endpoints

### 1️⃣ AUTH SERVICE (Public - No Token Required)

#### **Register User**
```
POST /api/auth/register
Content-Type: application/json

{
  "username": "john_doe",
  "email": "john@example.com",
  "password": "securePassword123"
}

Response (201):
{
  "success": true,
  "newUser": {
    "_id": "user_id_123",
    "username": "john_doe",
    "email": "john@example.com"
  },
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
}
```

#### **Login User**
```
POST /api/auth/login
Content-Type: application/json

{
  "email": "john@example.com",
  "password": "securePassword123"
}

Response (200):
{
  "success": true,
  "existingUser": {
    "_id": "user_id_123",
    "username": "john_doe",
    "email": "john@example.com"
  },
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
}
```

---

### 2️⃣ POST SERVICE (Protected - Token Required)

#### **Create Post**
```
POST /api/posts/
Authorization: Bearer <jwt_token>
Content-Type: multipart/form-data

Body:
- caption: "My awesome post"
- image: <image_file>

Response (201):
{
  "success": true,
  "post": {
    "_id": "post_id_123",
    "userId": "user_id_123",
    "caption": "My awesome post",
    "imageUrl": "https://imagekit.io/...",
    "createdAt": "2024-05-06T10:30:00Z"
  }
}
```

---

### 3️⃣ FOLLOW SERVICE (Protected - Token Required)

#### **Follow User**
```
POST /api/follow/:followingId
Authorization: Bearer <jwt_token>
x-user-id: user_id_123

Response (201):
{
  "success": true,
  "result": {
    "_id": "follow_id_123",
    "followerId": "user_id_123",
    "followingId": "user_id_456"
  }
}
```

#### **Unfollow User**
```
DELETE /api/follow/:followingId
Authorization: Bearer <jwt_token>
x-user-id: user_id_123

Response (200):
{
  "success": true,
  "result": {
    "message": "unfollowed successfully"
  }
}
```

#### **Get Followers**
```
GET /api/follow/followers/:userId
Authorization: Bearer <jwt_token>
x-user-id: your_user_id

Response (200):
{
  "success": true,
  "allFollowers": [
    {
      "_id": "follow_id_1",
      "followerId": "user_id_456",
      "followingId": "user_id_123"
    }
  ]
}
```

#### **Get Following**
```
GET /api/follow/following/:userId
Authorization: Bearer <jwt_token>
x-user-id: your_user_id

Response (200):
{
  "success": true,
  "allFollowing": [
    {
      "_id": "follow_id_2",
      "followerId": "user_id_123",
      "followingId": "user_id_789"
    }
  ]
}
```

---

### 4️⃣ MESSAGE SERVICE (Protected - WebSocket)

#### **Real-time Chat via WebSocket**
```
WebSocket Connection:
ws://localhost:3000/api/message/socket.io

Events:
1. Join Room:
   emit("some room", {userA: "user_id_123", userB: "user_id_456"})

2. Send Message:
   emit("send_message", {
     senderId: "user_id_123",
     receiverId: "user_id_456",
     content: "Hello!"
   })

3. Receive Message:
   on("receive_message", (message) => {
     console.log(message);
   })

4. Disconnect:
   socket.disconnect()
```

---

## 🧪 TESTING GUIDE

### **Step 1: Start All Services**
```bash
# Terminal 1 - Auth Service
cd auth-service
npm install
npm start
# Should run on http://localhost:8001

# Terminal 2 - Post Service
cd post-service
npm install
npm start
# Should run on http://localhost:8002

# Terminal 3 - Follow Service
cd follow-service
npm install
npm start
# Should run on http://localhost:8003

# Terminal 4 - Message Service
cd mesasge-service
npm install
npm start
# Should run on http://localhost:8004

# Terminal 5 - API Gateway
cd api-gateway
npm install
npm start
# Should run on http://localhost:3000
```

---

### **Step 2: Test with cURL or Postman**

#### **Test 1: Register User**
```bash
curl -X POST http://localhost:3000/api/auth/register \
  -H "Content-Type: application/json" \
  -d '{
    "username": "testuser",
    "email": "test@example.com",
    "password": "Test@123"
  }'
```

**Expected Output:**
```json
{
  "success": true,
  "newUser": {...},
  "token": "eyJhbGc..."
}
```

---

#### **Test 2: Login User**
```bash
curl -X POST http://localhost:3000/api/auth/login \
  -H "Content-Type: application/json" \
  -d '{
    "email": "test@example.com",
    "password": "Test@123"
  }'
```

**Save the token for next requests!**

---

#### **Test 3: Create Post** (Using Postman - multipart)
```
POST http://localhost:3000/api/posts/
Headers:
  Authorization: Bearer <token_from_login>

Body (multipart/form-data):
  - caption: "My first post"
  - image: <select_image_file>
```

---

#### **Test 4: Follow User**
```bash
curl -X POST http://localhost:3000/api/follow/other_user_id \
  -H "Authorization: Bearer <token>" \
  -H "x-user-id: your_user_id"
```

---

#### **Test 5: Get Followers**
```bash
curl -X GET "http://localhost:3000/api/follow/followers/your_user_id" \
  -H "Authorization: Bearer <token>"
```

---

## 🔄 Data Flow Diagram

```
Client Request
    ↓
API Gateway (Port 3000)
    ↓
[verifyToken Middleware]
    ↓
[pathRewrite: /api/posts → /]
    ↓
Proxy to Service (Port 8002/8003/8004)
    ↓
Service Response
    ↓
Client
```

---

## ⚙️ Gateway Configuration Details

### **Auth Middleware** (`apiG.auth.middleware.js`)
- ✅ Extracts token from `Authorization: Bearer <token>`
- ✅ Verifies JWT signature using `JWT_SECRET` from `config/env.js`
- ✅ Sets `req.userId` for internal use
- ✅ Adds `x-user-id` header for downstream services
- ❌ Rejects requests without valid token (401)

### **Proxy Routes** (All with pathRewrite & Error Handling)
- ✅ `/api/auth` → `http://localhost:8001` (no rewrite)
- ✅ `/api/posts` → `http://localhost:8002` (strips `/api/posts`)
- ✅ `/api/follow` → `http://localhost:8003` (strips `/api/follow`)
- ✅ `/api/message` → `http://localhost:8004` (strips `/api/message`, ws: true)
- ✅ All have error handlers (503 if service down)

---

## 🐛 Troubleshooting

| Issue | Cause | Solution |
|-------|-------|----------|
| 401 Unauthorized | No token or invalid token | Include `Authorization: Bearer <token>` header |
| 503 Service Unavailable | Service not running | Check if all services are running on correct ports |
| CORS Error | Cross-origin request | Gateway already configured for CORS |
| WebSocket connection fails | Message service not running | Start message service on port 8004 |
| Token mismatch | Different JWT_SECRET | Ensure JWT_SECRET is same in auth-service and api-gateway |

---

## 📝 Environment Variables Required

**API Gateway** (`.env`):
```
PORT=3000
JWT_SECRET=your-secret-key
NODE_ENV=development
```

**Each Service** (`.env`):
```
MONGO_URI=mongodb://localhost:27017/database_name
PORT=8001 (or 8002, 8003, 8004)
JWT_SECRET=your-secret-key (same as gateway)
```

---

## ✨ Integration Summary

✅ All services connected via API Gateway
✅ Token-based authentication working
✅ User ID properly forwarded via x-user-id header
✅ Path rewriting configured correctly
✅ WebSocket support for real-time messaging
✅ Error handling for service failures
✅ Ready for production deployment

**Testing Status: READY! 🚀**
