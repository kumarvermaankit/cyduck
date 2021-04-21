import React from "react"

import { BrowserRouter as Router,Route } from "react-router-dom";
import SignIn from "./styles/SignIn";
import SignUp from "./SignUp";
import Home from "./StartingPage"
import AuthenticatedRoute from "./AuthenticatedRoute";
import UnauthenticatedRoute from "./Unauthenticatedroute";
import StartingPage from "./StartingPage";
import CommunityFile from "./CommunityFile";
import File from "./addfile";



import CodeM from "./cm" 
import Search from "./search"
import MyQuestions from "./myquestions"
import Qcode from "./qcode"
import Profile from "./Profile"

function Routes(){

return(
  
  <Router>



<UnauthenticatedRoute exact path="/signin">
  <SignIn />
</UnauthenticatedRoute>
<UnauthenticatedRoute exact path="/signup">
  <SignUp />
</UnauthenticatedRoute>
<UnauthenticatedRoute exact path="/">
  <StartingPage/>
</UnauthenticatedRoute>

<Route exact path="/community">
  <CommunityFile />
</Route>
<AuthenticatedRoute exact path="/file">
  <File />
  </AuthenticatedRoute>


  <AuthenticatedRoute exact path="/codemirror">
  <CodeM />
  </AuthenticatedRoute>
 <AuthenticatedRoute exact path="/search/:languages/:fields/:frameworks/:string">
   <Search />
 </AuthenticatedRoute>
 <AuthenticatedRoute exact path="/myq">
   <MyQuestions/>
 </AuthenticatedRoute>


<AuthenticatedRoute exact path="/profile/:username">
   <Profile />
 </AuthenticatedRoute>
<Route exact path="/ques/:index/:document/:username">
<Qcode />
</Route>

<Route exact path="/home">
<Home/>
</Route>



</Router>
)



}

export default Routes