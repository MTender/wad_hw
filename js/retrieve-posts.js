$(
    function() {
    /*$.get("https://api.npoint.io/9f01f9e5f6462ffc8e5e", function(allPosts) {*/
    $.get("json/posts.json", function(allPosts) {
        let postsArea = $('.posts-area');
        let dateOptions = { weekday: 'short', year: 'numeric', month: 'short', day: 'numeric' };

        for (post of allPosts) {

            let postDiv = $('<div class="post">');

            let postHeader = $('<div class="post-header">');

            let profilePicture = $('<div class="profile-picture">');
            let pictureLink = $('<a href="#">');
            pictureLink.append($('<img src="images/profile-pictures/' + post.author.profilePicture + '" id="poster' + post.id + '-pfp" alt="pfp">'));
            profilePicture.append(pictureLink);
            profilePicture.append($('<p>').text(post.author.firstname + " " + post.author.lastname));

            let postDatetime = $('<div class="post-datetime">');
            postDatetime.append($('<p>').text(new Date(post.date).toLocaleDateString("en-US", dateOptions)));
            postDatetime.append($('<p>').text(post.time));

            postHeader.append(profilePicture);
            postHeader.append(postDatetime);

            postDiv.append(postHeader);

            if (post.image !== "") {
                let postImage = $('<div class="post-image">');
                postImage.append($('<img src="images/post-images/' + post.image + '" alt="post-img">'))

                postDiv.append(postImage);
            }

            let postText = $('<div class="post-text">');
            postText.append($('<p>').text(post.caption));

            postDiv.append(postText);


            let postFooter = $('<div class="post-footer">');
            let likeButton = $('<div class="like-button">');
            let likeButtonLink = $('<a href="#">');
            likeButtonLink.append('<img src="images/like.png" alt="like">');
            likeButton.append(likeButtonLink);
            postFooter.append(likeButton);

            postDiv.append(postFooter);

            postsArea.append(postDiv)
        }
    })
}

);