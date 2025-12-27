// // AuthServices.js

// export async function login(data) {
//   try {
//     const res = await fetch("https://ecommerce.routemisr.com/api/v1/auth/signin", {
//       method: "POST",
//       headers: { "Content-Type": "application/json" },
//       body: JSON.stringify(data),
//     });
//     if (!res.ok) {
//       const err = await res.json();
//       throw new Error(err.error || `Status: ${res.status}`);
//     }
//     return await res.json();
//   } catch (error) {
//     console.error("Login Error:", error);
//     return { error: error.message };
//   }
// }

// export async function signUp(data) {
//   try {
//     const res = await fetch("https://ecommerce.routemisr.com/api/v1/auth/signup", {
//       method: "POST",
//       headers: { "Content-Type": "application/json" },
//       body: JSON.stringify(data),
//     });
//     if (!res.ok) {
//       const err = await res.json();
//       throw new Error(err.error || `Status: ${res.status}`);
//     }
//     return await res.json();
//   } catch (error) {
//     console.error("SignUp Error:", error);
//     return { error: error.message };
//   }
// }
const BASE_URL = import.meta.env.VITE_API_BASE_URL;

export async function login(data) {
  try {
    const res = await fetch(`${BASE_URL}/auth/signin`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });

    if (!res.ok) {
      const err = await res.json();
      throw new Error(err.error || `Status: ${res.status}`);
    }

    return await res.json();
  } catch (error) {
    console.error("Login Error:", error);
    return { error: error.message };
  }
}

export async function signUp(data) {
  try {
    const res = await fetch(`${BASE_URL}/auth/signup`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });

    if (!res.ok) {
      const err = await res.json();
      throw new Error(err.error || `Status: ${res.status}`);
    }

    return await res.json();
  } catch (error) {
    console.error("SignUp Error:", error);
    return { error: error.message };
  }
}
