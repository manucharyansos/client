export default function ({ app, redirect, next }) {
  if (!app.$auth.loggedIn) {
    return redirect('/login')
  }
  const userRole = app.$auth.user.role
  if (userRole !== 1) {
    return redirect('/')
  }
  return next
}
