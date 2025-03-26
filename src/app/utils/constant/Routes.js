export const REDIRECT_ROUTES = ["/dashboard", "/landing"];

export const ALL_ROUTES = [
  // test
  "/mohammad/test",
  // Auth
  "/",
  "/landing",
  "/dashboard",
  "/login",
  "/sign-up",
  "/confirm",
  "/change-password",
  "/change-password-confirm",
  // Markets
  "/market",
  // Trades
  "/trades",
  // Wallet
  "/wallet",
  "/wallet/deposit",
  "/wallet/withdraw",
  // Credit
  "/credit",
  // Profile
  "/profile",
  "/profile/invite-friends",
  "/profile/edit-profile",
  "/profile/change-avatar",
  "/profile/authentication",
  "/profile/user-level-up",
  // CardManagement
  "/card-management",
  "/card-management/add-card",
  // Notification
  "/notification",
  // Camera
  "/camera",
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
