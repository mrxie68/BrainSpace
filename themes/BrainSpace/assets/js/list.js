document.addEventListener('DOMContentLoaded', async function () {
  const commentsContainer = document.getElementById('comments-container');
  const loadingIndicator = document.getElementById('loading-indicator');
  const commentCard = document.getElementById('comments-container');
  const envId = commentCard?.dataset.envId;
  const spacePath = commentCard?.dataset.spacepath;

  if (!envId || !spacePath) {
    console.error('envId or spacePath not defined');
    loadingIndicator.innerHTML = 'Failed to load comments. Please check the configuration.';
    return;
  }

  loadingIndicator.style.display = 'block';

  try {
    const comments = await twikoo.getRecentComments({
      envId,
      urls: [spacePath],
      pageSize: 3,
      includeReply: false
    });

    const latestComments = comments.map(comment => comment.commentText);
    loadingIndicator.style.display = 'none';
    displayAndSwitchComments(latestComments, commentsContainer);
  } catch (err) {
    console.error('Failed to get comments:', err);
    loadingIndicator.style.display = 'none';
    loadingIndicator.innerHTML = 'Failed to load comments. Please try again later.';
  }
});

function displayAndSwitchComments(commentTexts, container) {
  const fragment = document.createDocumentFragment();
  commentTexts.forEach(commentText => {
    const commentElement = document.createElement('div');
    commentElement.className = 'comment-wrapper';
    commentElement.innerHTML = `<span style="overflow: hidden;font-size: 16px;font-weight: 800;text-overflow: ellipsis;display: -webkit-box; -webkit-box-orient: vertical;overflow: hidden;-webkit-line-clamp: 1;">${commentText}</span>`;
    fragment.appendChild(commentElement);
  });
  container.innerHTML = '';
  container.appendChild(fragment);

  let currentIndex = 0;
  container.children[currentIndex].classList.add('active');
  container.style.display = 'block';

  setInterval(() => {
    container.children[currentIndex].classList.remove('active');
    currentIndex = (currentIndex + 1) % commentTexts.length;
    container.children[currentIndex].classList.add('active', 'uk-animation-slide-bottom-small');
  }, 6000);
}

// For the second part of your code:

var commentIndex = 1;
var commentCard = document.getElementById('uk-card12wwdx1');
var envId = commentCard?.dataset.envId;
var messagePath = commentCard?.dataset.messagepath;
var comments = [];

document.getElementById('loading').style.display = 'none';

twikoo.getRecentComments({
  envId: envId,
  urls: [messagePath],
  pageSize: 5,
  includeReply: false
})
.then(function (fetchedComments) {
  comments = fetchedComments;
  if (comments.length === 0) {
    console.log('No comments available');
    return;
  }
  startCommentCarousel();
})
.catch(function (err) {
  console.error('Failed to get comments:', err);
});

function startCommentCarousel() {
  const elements = {
    author: document.querySelector('.cardtop1__title'),
    content: document.querySelector('.cardtop1__subtitle'),
    time: document.querySelector('#commentTime'),
    avatarContainer: document.querySelector('.cardtop1__acounts'),
    animation: document.querySelector('.comment-animation')
  };

  function updateComment() {
    const currentComment = comments[commentIndex - 1] || comments[0];

    elements.animation.classList.add('uk-animation-slide-bottom-small');
    elements.author.innerHTML = `${currentComment.nick}:`;
    elements.content.innerHTML = currentComment.comment;
    elements.time.innerText = new Date(currentComment.created).toLocaleString();

    elements.avatarContainer.innerHTML = '';
    comments.slice(0, 3).forEach((comment, i) => {
      const avatarImg = document.createElement('img');
      avatarImg.src = comment.avatar;
      avatarImg.alt = `avatar ${i + 1}`;
      avatarImg.id = `avatar_${i + 1}`;
      elements.avatarContainer.appendChild(avatarImg);
    });

    commentIndex = (commentIndex % comments.length) + 1;
    document.getElementById('commentIndex').innerText = commentIndex.toString();

    setTimeout(() => {
      elements.animation.classList.remove('uk-animation-slide-bottom-small');
    }, 800);
  }

  updateComment();
  setInterval(updateComment, 15000);
}