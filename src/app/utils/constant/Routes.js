// export const REDIRECT_ROUTES = ["/dashboard/home", "/landing"];
export const REDIRECT_ROUTES = ["/landing"];

export const ALL_ROUTES = [
  // test
  "/mohammad/test",

  // Landing
  "/",
  "/landing",

  // Auth

  "/login",
  "/register",

  // Dashbnoard

  "/dashboard/home",

  // dashboard-coin
  "/dashboard/coin-list",
  "/dashboard/coin",

  // dashboard-author
  "/dashboard/author-list",
  "/dashboard/author",

  // dashboard-providers
  "/dashboard/provider-list",
  "/dashboard/provider",

  // aboutUs
  "/drvafaeijahan",

];

export const NOT_RELOAD_ROUTES = [
  ["is_login", ["/login", "/register"]],
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
  // Coin
  [
    "/dashboard/coin-list",
    [
      "/dashboard/coin",
    ],
  ],

   // Author
   [
    "/dashboard/author-list",
    [
      "/dashboard/author",
    ],
  ],


   // Provider
   [
    "/dashboard/provider-list",
    [
      "/dashboard/provider",
    ],
  ],
];
