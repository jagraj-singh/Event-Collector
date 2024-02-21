1. We don't have to worry about auth now. Since that would require creation of one or more endpoints.
2. Database size is limited. No pagination has been done and also duplication of item and type is allowed to avoid unnecessary complexity.
3. type and item are limited from db tables. Currently only two exist for each.
4. No user is trying to send SQL queries in parameters to break down the system.
5. Returning id in get to be used somewhere.
