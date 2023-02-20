document.getElementById('apply-bg').addEventListener('click',function(){
    const friends = document.getElementsByClassName('friend');
    for(const friend of friends){
        friend.style.backgroundColor = 'skyblue' 
    }
})

document.getElementById('center-third').addEventListener('click',function(){
    const third = document.getElementById('third-friend');
    third.style.textAlign = 'center';
})
document.getElementById('add-new-friend').addEventListener('click', function(){
    const friendsContainer = document.getElementById('friends');
    const newFriend = document.createElement('div');
    newFriend.classList.add('friend')
    newFriend.innerHTML = `
         <h3 class="friend-name">New Friend name</h3>
         <p>Lorem ipsum dolor sit amet, consectetur </p>
    `
friendsContainer.appendChild(newFriend)
})