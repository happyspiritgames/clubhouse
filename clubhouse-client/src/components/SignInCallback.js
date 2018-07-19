import * as React from 'react';
import fakeAuth from '../security/fakeAuth';
import { Redirect } from 'react-router-dom';

export default class SigninCallback extends React.Component {

  componentWillMount() {
    console.log(this.props);

    // get token out of query
    // http://localhost:3000/signin
    // #id_token=eyJraWQiOiJ0Kzl6d3NDUkZRNVBBRmhmUGhXcXhxSHFiZDM3cFVCTVA3OU9vNE5keDF3PSIsImFsZyI6IlJTMjU2In0.eyJhdF9oYXNoIjoiZTkwZ1ZveGFNUTIwWWpabVJYbFFfUSIsInN1YiI6Ijg1MmM1ZWJjLWIzNDctNDYwOC05MDc3LWI0NDM0M2ExNDdjOCIsImF1ZCI6IjNqZ2N1cGE0bzk1Z2NxOThxbWltYjJxcXQ3IiwiZW1haWxfdmVyaWZpZWQiOnRydWUsInRva2VuX3VzZSI6ImlkIiwiYXV0aF90aW1lIjoxNTMxNzg4Mjg0LCJpc3MiOiJodHRwczpcL1wvY29nbml0by1pZHAudXMtd2VzdC0yLmFtYXpvbmF3cy5jb21cL3VzLXdlc3QtMl9EVTlzbnpaOHMiLCJjb2duaXRvOnVzZXJuYW1lIjoiODUyYzVlYmMtYjM0Ny00NjA4LTkwNzctYjQ0MzQzYTE0N2M4IiwiZXhwIjoxNTMxNzkxODg0LCJpYXQiOjE1MzE3ODgyODQsImVtYWlsIjoiZGF2ZW1vdW50QGdtYWlsLmNvbSJ9.s9JF0FPcyaBXKMmQJgc3h99sB9NcvbOKd6lijpvHhMRHDER_CL72qas3arkJ4xaNjZJ6EMHnDFMc4F6U1g_JnCXnguUL-Yvr1UNGqUxzh5UTkLTjW_6uOuZ-fMuviNkm6hDyax8gYtfRFg5udtjeRKA19f2aZAe6Dt8r0EW9kE3CtW4ynLgVExnEeT2ftIjS5C9mCca8PR-YW_3Jy02kv8Sh15fuORfbq8Ge5B6R6dtFkJmyGgX5HVE33nvTPAJB_bqw6poDJ1Qoesoqp2pQkt_jF86rr3KjDuwsNy-o90NIcHh7liOSTjdW_B6vJSNlK6eaRpafqhb2z-AYWsAGeA&access_token=eyJraWQiOiJYcG5PY1Mwd0ZOTEZXeUtJMTNidUoyXC9BS2tkdUFDT2lFNHlJTmZ6TFZjMD0iLCJhbGciOiJSUzI1NiJ9.eyJzdWIiOiI4NTJjNWViYy1iMzQ3LTQ2MDgtOTA3Ny1iNDQzNDNhMTQ3YzgiLCJ0b2tlbl91c2UiOiJhY2Nlc3MiLCJzY29wZSI6ImF3cy5jb2duaXRvLnNpZ25pbi51c2VyLmFkbWluIHBob25lIG9wZW5pZCBwcm9maWxlIGVtYWlsIiwiYXV0aF90aW1lIjoxNTMxNzg4Mjg0LCJpc3MiOiJodHRwczpcL1wvY29nbml0by1pZHAudXMtd2VzdC0yLmFtYXpvbmF3cy5jb21cL3VzLXdlc3QtMl9EVTlzbnpaOHMiLCJleHAiOjE1MzE3OTE4ODQsImlhdCI6MTUzMTc4ODI4NCwidmVyc2lvbiI6MiwianRpIjoiMzE3NjIwMmMtYmE0Yi00OWNlLWE4YWYtOTBkZjg5ZWJkOTc2IiwiY2xpZW50X2lkIjoiM2pnY3VwYTRvOTVnY3E5OHFtaW1iMnFxdDciLCJ1c2VybmFtZSI6Ijg1MmM1ZWJjLWIzNDctNDYwOC05MDc3LWI0NDM0M2ExNDdjOCJ9.L2b-Cq7uyTG5z1qJ12z3oLLgmKr_hgcEA2IkRxT2gBQBgYf-cPyQqllmJ6QwuQFZnQbiNNDqzNC42QgZqOm6Frh5ThoUu5Rf5_U-uqQCg5cP1JI9zPpqLDUSZXTjETpTqz_jpDUZsih1_ckKIkHtWcOQaLEZrMRmPfpJurj1co-QtB3C58GBqrBeRXpoEIo6MjVYRFT2wm3srMd4F6e9aBFbDxNu8U5gm8DoVoyXPdi9P9bMSPsmZ45RbWhTU4fTFmWRiWE7OGR-Duv4lljWiYqYkpeIVBr4ZH2THR4OSb2Y_v8zoPM19PETODoM64negHzLENavLl4KXeI8vkVAYQ
    // &expires_in=3600
    // &token_type=Bearer

    // redirect to member page

    fakeAuth.authenticate(() => console.log('Did it!!!', window.location))
  }

  render() {
    return (
      <Redirect
        to={{
          pathname: "/design-a-game",
          state: { from: this.props.location }
        }}
      />
    );
  }
}