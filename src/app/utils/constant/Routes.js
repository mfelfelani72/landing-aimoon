// export const REDIRECT_ROUTES = ["/dashboard", "/landing"];
export const REDIRECT_ROUTES = ["/landing"];

export const ALL_ROUTES = [
  // test
  "/mohammad/test",
  // Landing
  "/",
  "/landing",
  // Dashbnoard
  "/dashboard"

];

export const NOT_RELOAD_ROUTES = [
  ["is_login", ["/login", "/sign-up"]],
  [
    "from_location",
    [
      "/confirm",
      "/change-password",
      "/change-password-confirm",
      // profile
      // "/profile/user-level-up",
    ],
  ],

  [
    "/",
    [
      // "/your-route",
    ],
  ],
];
