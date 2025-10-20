# Fees Tracking System (POC)

This is a **Proof of Concept (POC)** for a Student Fees Tracking System.  
It allows you to manage enrollments, track student fees, and handle payments efficiently.

The project is built using **Angular 19**, **NGXS**, **PrimeNG**, and **Tailwind CSS**.

---

## ✅ Features Implemented So Far

### 1. View Enrollments

- Display a list of all students with details such as:
  - Name, contact, batch, fees, EMIs, total received, and payment status.
- **Filter enrollments** by batch, student name, and payment status.
- The table is implemented using **PrimeNG Table** with responsive layout.
- Payment status is color-coded for clarity:
  - **Full Paid** – green
  - **Partial Paid** – yellow
  - **Pending** – red

---

### 2. Add Enrollment

- Add new students with batch and payment information.
- Implemented using **PrimeNG Dynamic Dialog** for a smooth user experience.
- Form built with **Reactive Forms** with validations:
  - Required fields
  - Minimum values and length checks
- On submission:
  - Enrollment is **added to the NGXS store** immediately.
  - Success or error messages are displayed using **PrimeNG Toast**.

---

### 3. Filters for Enrollments (New Feature)

- Users can filter enrollments dynamically based on:
  - **Batch ID**
  - **Student Name**
  - **Payment Status**
- Filtering is **flexible and reactive**:
  - Multiple filters can be applied simultaneously.
  - Only the filters provided are applied.
  - If no match exists, the table correctly shows **“No results found.”**
- Filtering logic is fully handled in **NGXS state**, ensuring the UI updates automatically.

---

### 4. State Management with NGXS

- **NGXS** manages all application state reactively.
- Key states:
  - `EnrollmentState` – stores all student enrollment data.
  - `BatchesState` – stores batch information.
- Supported actions:
  - `GetEnrollments` – fetch all enrollments.
  - `PostEnrollment` – add a new enrollment.
  - `GetEnrollmentsByFilter` – filter enrollments dynamically.
  - `GetBatches` – fetch available batches.
  - `ClearEnrollmentsFilter` – reset filters to show all enrollments.
- **Filtered enrollments** are stored separately in the state to allow easy **reset/clear filters**.
- Components automatically update when state changes.

---

### 5. Responsive Layout

- Layout built using **Tailwind CSS grid system**.
- PrimeNG tables and dialogs adapt to different screen sizes.
- Ensures a seamless experience on desktop and mobile.

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

## 💡 Highlights

- **NGXS-Powered**: All data flow and filtering handled through NGXS for clean, reactive state management.
- **Dynamic Filtering**: Multiple optional filters applied together for precise search results.
- **PrimeNG Dialogs**: Seamless UI for adding enrollments without leaving the page.
- **Real-Time UI Updates**: Any change in the store immediately reflects in the components.
- **Responsive & Modern UI**: Tailwind CSS + PrimeNG ensure a polished and mobile-friendly experience.

---

## 🚀 Usage

1. Clone the repository:

```bash
git clone <https://github.com/gadimahendra/fees-tracking.git>
cd <fess-tracking>
npm install
ng serve
```
