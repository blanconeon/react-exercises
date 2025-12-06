import React, { useState, useEffect } from 'react';
import { get } from './mockBackend/fetch';

export default function SocialNetwork() {
        
        const [menu, setMenu] = useState(null);
 useEffect(() => {
        get('/menu').then((menuResponse) => {
        setMenu(menuResponse.data);
        }); 
        }, []);
        
        const [newsFeed, setNewsFeed] = useState(null); 
useEffect(() => {       
       get('/news-feed').then((newsFeedResponse) => {
       setNewsFeed(newsFeedResponse.data)
        });
        }, []);
        
        const [friends, setFriends] = useState(null);
useEffect(() => {
        get('/friends').then((friendsResponse) => {
        setFriends(friendsResponse.data);
        });
        }, []);        
  

  return (
    <div className='App'>
      <h1>My Network</h1>
      {!menu ? <p>Loading..</p> : (
        <nav>
          {menu.map((menuItem) => (
            <button key={menuItem}>{menuItem}</button>
          ))}
        </nav>
      )}
      <div className='content'>
        {!newsFeed ? <p>Loading..</p> : (
          <section>
            {newsFeed.map(({ id, title, message, imgSrc }) => (
              <article key={id}> {/*This is called object destructuring. You use it when you know the structure of each news feed item in advance, so you can easily access id, title, message, and imgSrc directly. */}
                <h3>{title}</h3>
                <p>{message}</p>
                <img src={imgSrc} alt='' />
              </article>
            ))}
          </section>
        )}
        {!friends ? <p>Loading..</p> : (
          <aside>
            <ul>
              {friends
                .sort((a, b) => (a.isOnline && !b.isOnline ? -1 : 0))
                .map(({ id, name, isOnline }) => (
                  <li key={id} className={isOnline ? 'online' : 'offline'}>
                    {name}
                    {/*Here’s what’s happening:

- `friends.sort((a, b) => (a.isOnline && !b.isOnline ? -1 : 0))` sorts the friends array so that online friends appear first.
- `.map(({ id, name, isOnline }) => ( ... ))` loops through each friend, using object destructuring to get `id`, `name`, and `isOnline`.
- For each friend, a `<li>` is created with a key of `id` and a class of `'online'` or `'offline'` based on their status. The friend’s name is displayed inside the list item. */}
                  </li>
                ))}
            </ul>
          </aside>
        )}
      </div>
    </div>
  );
} //useState should always be called at the top level of your component, never inside useEffect or any function. This keeps state consistent across renders. Only call setMenu inside useEffect, not useState.
