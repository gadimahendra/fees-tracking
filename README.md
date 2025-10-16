# Fees Tracking System (POC)

This is a **Proof of Concept (POC)** for a Student Fees Tracking System.  
It allows you to manage enrollments, track student fees, and handle payments efficiently.

The project is built using **Angular 19**, **NGXS**, **PrimeNG**, and **Tailwind CSS**.

---

## ✅ Features Implemented So Far

1. **View Enrollments**

   - List all students with their details: name, contact, batch, fees, EMIs, total received, and payment status.
   - Uses a **PrimeNG table** with sorting and responsive layout.
   - Payment status is color-coded (Full Paid, Partial Paid, Pending).

2. **Add Enrollment**

   - Add new students with their batch and payment information.
   - Implemented using a **PrimeNG Dynamic Dialog**.
   - Form is built with **Reactive Forms** with validations:
     - Required fields
     - Minimum value and length checks
   - Submission updates the **NGXS store** immediately.
   - Success and error messages are shown using **PrimeNG Toast**.

3. **State Management**

   - **NGXS** is used to manage application state.
   - Enrollment data is stored in `EnrolmentState`.
   - Batch data is stored in `BatchesState`.
   - Supports **dispatching actions** like `GetEnrollments`, `PostEnrollment`, and `GetBatches`.
   - The state is reactive, so components automatically update when data changes.

4. **Responsive Layout**
   - Uses **Tailwind CSS grid system**.
   - Sidebar (Dashboard) stays fixed; content area scrolls independently.
   - PrimeNG tables and dialogs are responsive on different screen sizes.

---

## 🛠 Tech Stack

| Category         | Technology                       |
| ---------------- | -------------------------------- |
| Framework        | Angular 19                       |
| State Management | NGXS 19                          |
| UI Components    | PrimeNG 19, PrimeIcons           |
| Styling          | Tailwind CSS 4, PrimeUX Themes   |
| Reactive Forms   | Angular ReactiveFormsModule      |
| Build & Dev      | Angular CLI, TypeScript, PostCSS |

---
