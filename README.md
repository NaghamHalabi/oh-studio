process:

1- checking the design, checking how things work differently on different screen sizes 
2- grab your assets
3- css reset (andy bells) - you can use normalize for that 
 

1- don't go less than 16px 



Problems faced:

- including html and avoiding repetition 
- used gulp which might not have been the best choice for vite
- the major problem was having the nav successfully included in the index but not the profile
- the mistake was in the gulp file where the tasks where run in an order that does not allow us to have the partials before hand
- solution: run the tasks in the correct order (series), those that can run parallel run them parallel. 
- 