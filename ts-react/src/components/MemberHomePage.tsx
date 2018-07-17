import * as React from 'react';

export interface IMemberHomePageProps { compiler: string; framework: string; }

export const MemberHomePage = (props: IMemberHomePageProps) => (
  <div>
    <h1>Member Home Page</h1>
    <p>
      This page is aware of whether the user is signed in.
    </p>
  </div>
);
