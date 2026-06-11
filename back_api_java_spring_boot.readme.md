# Bright Future High School — Backend API (Java / Spring Boot)

REST API specification that backs the Nuxt 4 front-end in this repository. Every
endpoint below maps to data shown by a concrete page or portal in the UI.

- **Stack assumed:** Spring Boot 3.x, Spring Web, Spring Security (JWT), Spring Data JPA, PostgreSQL, Flyway, Bean Validation, MapStruct.
- **Base URL:** `/api/v1`
- **Format:** JSON (`Content-Type: application/json`), UTF-8.
- **Front-end pages covered:** Home, About, Academics, Student Life, Admissions, News & Events, and the Student / Teacher / Parent / Admin portals.

---

## 1. Conventions

### Authentication
- Stateless **JWT** (`Authorization: Bearer <accessToken>`).
- Public/CMS endpoints (section 3–6) are **unauthenticated** (read-only).
- Portal endpoints (section 7–10) require a valid token whose role matches.

### Internationalisation (matches the EN ⇄ KH toggle)
- Clients send `Accept-Language: en` or `Accept-Language: km` (fallback `en`).
- Localised content fields return the requested language; entities store both.

### Pagination (list endpoints)
`?page=0&size=20&sort=createdAt,desc` → response envelope:
```json
{ "content": [ ], "page": 0, "size": 20, "totalElements": 134, "totalPages": 7 }
```

### Standard error shape
```json
{ "timestamp": "2026-06-11T10:00:00Z", "status": 404, "error": "Not Found",
  "message": "News article 42 not found", "path": "/api/v1/news/42" }
```

### Status codes
`200` OK · `201` Created · `204` No Content · `400` Validation · `401` Unauthorized · `403` Forbidden · `404` Not Found · `409` Conflict · `422` Business rule.

---

## 2. Auth & Account  `/api/v1/auth`

Backs the **Portal Login** button and all dashboards.

| Method | Path | Auth | Description |
|---|---|---|---|
| POST | `/auth/login` | – | Authenticate; returns tokens + role |
| POST | `/auth/refresh` | – | Exchange refresh token for a new access token |
| POST | `/auth/logout` | user | Invalidate refresh token |
| GET  | `/auth/me` | user | Current user profile + role |
| POST | `/auth/forgot-password` | – | Send reset email |
| POST | `/auth/reset-password` | – | Reset with token |

```http
POST /api/v1/auth/login
{ "email": "student@bfhs.edu", "password": "••••••••" }
```
```json
{ "accessToken": "ey…", "refreshToken": "ey…", "expiresIn": 3600,
  "user": { "id": 101, "name": "Sophea Kim", "role": "STUDENT", "avatarUrl": "…" } }
```
Roles: `STUDENT`, `TEACHER`, `PARENT`, `ADMIN`.

---

## 3. Public Site Content (CMS)

### 3.1 Home  `/api/v1/home`
| Method | Path | Description | UI element |
|---|---|---|---|
| GET | `/home/stats` | School stats | `2,500+ Students · 150+ Teachers · 50+ Classrooms · 98% Graduation` |
| GET | `/home/programs?featured=true` | Featured academic programs | "Academic Excellence" cards |
| GET | `/home/testimonials` | Student/alumni voices | "Voices of BFHS" |
| GET | `/school/info` | Address, phone, email, map coords | Contact section / footer |

```json
// GET /home/stats
[ { "key": "students", "label": "Students", "value": "2,500+", "icon": "groups" },
  { "key": "graduationRate", "label": "Graduation Rate", "value": "98%", "icon": "verified" } ]
```

### 3.2 About  `/api/v1/about`
| Method | Path | Description |
|---|---|---|
| GET | `/about` | History, mission statement, hero copy |
| GET | `/about/principal-message` | Principal name, title, portrait, quote |
| GET | `/about/values` | Core values (Excellence, Integrity, Innovation) |
| GET | `/faculty?page=&size=` | Distinguished faculty (paginated) |
| GET | `/faculty/{id}` | Single faculty profile |
| GET | `/facilities` | Campus facilities gallery |

### 3.3 Academics  `/api/v1/academics`
| Method | Path | Description |
|---|---|---|
| GET | `/programs` | All programs (Science, Math, Language Arts, Social Studies, Technology, AI Hub) |
| GET | `/programs/{slug}` | Program detail + curriculum checklist |
| GET | `/programs/{slug}/curriculum.pdf` | Curriculum catalog download (binary) |
| GET | `/academic-calendar?year=2026` | Calendar events |

### 3.4 Student Life  `/api/v1/student-life`
| Method | Path | Description |
|---|---|---|
| GET | `/clubs?page=&size=` | Clubs & organisations (Robotics, Model UN, Code Society…) |
| GET | `/athletics` | Titan Athletics: teams count, stats |
| GET | `/arts` | Arts & music programs |
| GET | `/leadership` | Student council / house captains |
| GET | `/community-service` | Service initiatives gallery |

### 3.5 Admissions  `/api/v1/admissions`
| Method | Path | Description |
|---|---|---|
| GET | `/admissions/steps` | 4-step enrollment process |
| GET | `/admissions/requirements` | Document checklist |
| GET | `/admissions/tuition` | Tuition & fee table |
| GET | `/admissions/faq` | FAQ items |
| POST | `/admissions/applications` | **Submit application form** |
| GET | `/admissions/applications/{ref}` | Track application status |

```http
POST /api/v1/admissions/applications
{ "studentName": "…", "dob": "2010-04-02", "gradeApplyingFor": 9,
  "parentName": "…", "email": "…", "phone": "…", "message": "…" }
→ 201 { "reference": "ADM-2026-0481", "status": "SUBMITTED" }
```

---

## 4. News & Events  `/api/v1/news`, `/api/v1/events`

Backs the News page (category filter + masonry grid + monthly calendar) and the
home "Upcoming Events" list.

| Method | Path | Description |
|---|---|---|
| GET | `/news?category=&page=&size=` | News articles; `category` ∈ all/academic/athletics/arts |
| GET | `/news/featured` | Featured hero article |
| GET | `/news/{slug}` | Article detail |
| GET | `/news/categories` | Category list (localised labels) |
| GET | `/events?from=&to=` | Events in a date range (calendar) |
| GET | `/events/upcoming?limit=3` | Home "Upcoming Events" |
| GET | `/events/{id}` | Event detail |

---

## 5. Forms & Subscriptions  `/api/v1/contact`

| Method | Path | Description | UI element |
|---|---|---|---|
| POST | `/contact` | Contact message | Home "Get in Touch" form |
| POST | `/newsletter/subscribe` | Email subscription | Footer / news |

```http
POST /api/v1/contact
{ "fullName": "…", "email": "…", "message": "…" } → 201
```

---

## 6. Localised content helper
| Method | Path | Description |
|---|---|---|
| GET | `/i18n/{namespace}?lang=km` | Optional: server-driven UI strings if the front-end ever externalises translations |

---

## 7. Student Portal  `/api/v1/portal/student`  *(role STUDENT)*

Backs the student dashboard: profile card, attendance ring, schedule,
assignments, exam results, notifications, AI chatbot.

| Method | Path | Description | UI element |
|---|---|---|---|
| GET | `/profile` | GPA, class rank, credits | Profile overview (GPA 3.85, rank 12/140, 42 credits) |
| GET | `/attendance/summary` | Attendance % + breakdown | Attendance donut (94%) |
| GET | `/schedule?day=today` | Class schedule | "Today's Schedule" |
| GET | `/assignments?status=open` | Assignments list | "Recent Assignments" |
| GET | `/grades/exams?term=current` | Exam results | "Semester Exam Results" table |
| GET | `/notifications` | Notification feed | Notifications panel |
| PATCH | `/notifications/{id}/read` | Mark read | |
| POST | `/assistant/messages` | Send chatbot message → AI reply | AI chatbot widget |

```json
// GET /portal/student/attendance/summary
{ "percentage": 94, "present": 168, "absent": 7, "late": 4, "term": "Spring 2026" }
```

---

## 8. Teacher Portal  `/api/v1/portal/teacher`  *(role TEACHER)*

Backs the teacher dashboard: analytics bento, class roster with inline grade
entry, parent inbox, assigned courses.

| Method | Path | Description | UI element |
|---|---|---|---|
| GET | `/courses` | Assigned courses | "Assigned Courses" cards (AP Physics C…) |
| GET | `/courses/{id}/analytics` | Grade distribution, class average | Analytics bar chart (avg 84.5%) |
| GET | `/courses/{id}/roster` | Student roster | Roster table |
| PUT | `/courses/{id}/grades` | **Bulk grade entry** (inline edits) | Editable grade inputs |
| PATCH | `/grades/{enrollmentId}` | Single grade update | |
| GET | `/messages` | Parent messages inbox | Messaging side panel |
| POST | `/messages` | Reply to a parent | |

```http
PUT /api/v1/portal/teacher/courses/12/grades
{ "grades": [ { "studentId": 101, "score": 88 }, { "studentId": 102, "score": 91 } ] }
→ 200 { "updated": 2 }
```

---

## 9. Parent Portal  `/api/v1/portal/parent`  *(role PARENT)*

Backs the parent dashboard: quick stats, academic snapshot, fees/balance +
payment history, teacher messaging, school bulletins. Supports multiple children.

| Method | Path | Description | UI element |
|---|---|---|---|
| GET | `/children` | Linked children | Child switcher |
| GET | `/children/{id}/overview` | Attendance %, GPA | Quick-stats (96% attendance, 3.8 GPA) |
| GET | `/children/{id}/academics` | Subject grades + teacher note | Academic snapshot |
| GET | `/children/{id}/attendance` | Attendance detail | |
| GET | `/billing/balance` | Account balance | "Account Balance" |
| GET | `/billing/payments?page=&size=` | Payment history | "Payment History" |
| POST | `/billing/payments` | Make/record a payment | Pay button |
| GET | `/messages` | Faculty messages | "Faculty Connect" |
| POST | `/messages` | Message a teacher | |
| GET | `/bulletins` | School announcements | "School Bulletins" |

---

## 10. Admin Dashboard  `/api/v1/admin`  *(role ADMIN)*

Backs the admin dashboard: KPI cards, financial trends chart, campus tours,
user management table.

| Method | Path | Description | UI element |
|---|---|---|---|
| GET | `/dashboard/kpis` | Total students, active staff, daily attendance, revenue MTD | 4 KPI stat cards |
| GET | `/dashboard/financial-trends?months=6` | Revenue series | Financial Trends bar chart |
| GET | `/tours?status=upcoming` | Campus tour bookings | "Campus Tours" panel |
| PATCH | `/tours/{id}` | Approve / reschedule tour | |
| GET | `/users?role=&q=&page=&size=` | User management table | Users table + pagination |
| POST | `/users` | Create user | |
| GET | `/users/{id}` | User detail | |
| PUT | `/users/{id}` | Update user/role/status | Edit action |
| DELETE | `/users/{id}` | Deactivate user | |
| GET | `/admissions/applications?status=&page=` | Review submitted applications | (admin side of §3.5) |
| PATCH | `/admissions/applications/{id}` | Update application status | |

```json
// GET /api/v1/admin/dashboard/kpis
{ "totalStudents": 2500, "activeStaff": 150,
  "dailyAttendance": 0.962, "revenueMonthToDate": 184500.00, "currency": "USD" }
```

---

## 11. Suggested Domain Model

```
User(id, name, email, passwordHash, role, status, avatarUrl, locale)
 ├─ Student(userId, gradeLevel, gpa, classRank, creditsEarned)
 ├─ Teacher(userId, department, title)
 └─ Parent(userId) ──< ParentChild >── Student

Program(id, slug, title_en, title_km, description_en, description_km, icon, featured)
Course(id, programId, teacherId, name, term, classAverage)
Enrollment(id, courseId, studentId, score, grade)
Assignment(id, courseId, title, dueDate, status)
ExamResult(id, studentId, courseId, term, score)
AttendanceRecord(id, studentId, date, status)            // PRESENT/ABSENT/LATE
ScheduleSlot(id, courseId, dayOfWeek, startTime, endTime, room)

NewsArticle(id, slug, category, title_en, title_km, body_en, body_km, imageUrl, featured, publishedAt)
Event(id, title_en, title_km, location, startAt, endAt, type)
FacultyMember(id, name, role_en, role_km, photoUrl, department)
Facility(id, name_en, name_km, imageUrl, category)
Club(id, name, description_en, description_km, icon)
Testimonial(id, authorName, classOf, quote_en, quote_km, avatarUrl)

CoreValue / FaqItem / AdmissionStep / Requirement / TuitionFee   // CMS lookup tables

Application(id, reference, studentName, dob, gradeApplyingFor, parentName, email, phone, message, status, submittedAt)
ContactMessage(id, fullName, email, message, createdAt)
Notification(id, userId, title, body, read, createdAt)
Message(id, fromUserId, toUserId, body, sentAt, readAt)
Invoice / Payment(id, parentId, studentId, amount, status, paidAt, method)
CampusTour(id, name, email, requestedAt, scheduledFor, status)
Bulletin(id, title_en, title_km, body_en, body_km, publishedAt)
```

---

## 12. Suggested Spring Boot Package Layout

```
com.bfhs.api
├─ config/         SecurityConfig, JwtFilter, CorsConfig, OpenApiConfig, WebI18nConfig
├─ auth/           AuthController, AuthService, JwtService, dto/
├─ user/           UserController, UserService, User, Role, repository/
├─ content/        HomeController, AboutController, AcademicsController, StudentLifeController,
│                  AdmissionsController, NewsController, EventController  (public CMS)
├─ form/           ContactController, ApplicationController, NewsletterController
├─ portal.student/ StudentPortalController, ...
├─ portal.teacher/ TeacherPortalController, GradeService, ...
├─ portal.parent/  ParentPortalController, BillingService, ...
├─ admin/          AdminDashboardController, UserAdminController, TourController
├─ common/         dto (PageResponse, ApiError), exception (GlobalExceptionHandler), i18n
└─ Application.java
```

---

## 13. Security Matrix

| Area | Anonymous | STUDENT | TEACHER | PARENT | ADMIN |
|---|:--:|:--:|:--:|:--:|:--:|
| Public content (§3–6) | ✅ read | ✅ | ✅ | ✅ | ✅ |
| Submit contact/application | ✅ | ✅ | ✅ | ✅ | ✅ |
| `/portal/student/**` | ❌ | ✅ own | ❌ | ❌ | ✅ |
| `/portal/teacher/**` | ❌ | ❌ | ✅ own | ❌ | ✅ |
| `/portal/parent/**` | ❌ | ❌ | ❌ | ✅ own children | ✅ |
| `/admin/**` | ❌ | ❌ | ❌ | ❌ | ✅ |

> Ownership is enforced from the JWT subject (a student may only read their own
> records; a parent only their linked children) — never from a client-supplied id.

---

## 14. Cross-cutting

- **OpenAPI / Swagger UI** at `/swagger-ui.html` (springdoc-openapi).
- **Validation** via `@Valid` + Bean Validation; field errors returned in the §1 error envelope.
- **CORS**: allow the Nuxt dev origin `http://localhost:3000`.
- **Rate-limit** public POST forms (contact, application, login) to deter abuse.
- **Auditing**: `createdAt` / `updatedAt` via JPA auditing on all entities.
- **Migrations**: Flyway scripts under `src/main/resources/db/migration`.
