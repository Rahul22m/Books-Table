<script>
    import { Router, Route, Link } from 'svelte-routing';
    import Login from './lib/Login.svelte';
    import Signup from './lib/Signup.svelte';
    import Books from './lib/Books.svelte';
    // import User from './lib/GetUser.svelte';
    import Admin from './lib/admin.svelte';
  </script>
  
  <Router>
    <!-- <nav>
      <Link to="/signup">Signup</Link>
      <Link to="/login">Login</Link>
      <Link to="/books">Books</Link>
    </nav> -->
  
    <Route path="/" component={Signup} />
    <Route path="/login" component={Login} />
    <Route path="/signup" component={Signup}/>
    <Route path="/books" component={Books} />
    <Route path="/users" component={Admin}/>
  </Router>
