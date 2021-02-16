const commentForm = function () {
  const commentFormDiv = document.createElement("div");
  commentFormDiv.classList.add("comment-form-div");
  mainAlbumElement.appendChild(commentFormDiv);
  const commentForm = document.createElement("form");
  commentForm.classList.add("comment-form");
  commentForm.setAttribute("method", "post");
  commentFormDiv.appendChild(commentForm);

  const commentAuthorLabel = document.createElement("label");
  commentAuthorLabel.classList.add("comment-author-label");
  commentAuthorLabel.innerText = "Author:";
  commentFormDiv.appendChild(commentAuthorLabel);

  const commentAuthorInput = document.createElement("input");
  commentAuthorInput.classList.add("comment-author-input");
  commentFormDiv.appendChild(commentAuthorInput);

  const commentFormBreak = document.createElement("br");
  commentFormDiv.appendChild(commentFormBreak);

  const commentBodyLabel = document.createElement("label");
  commentBodyLabel.classList.add("comment-body-label");
  commentBodyLabel.innerText = "Comment:";
  commentFormDiv.appendChild(commentBodyLabel);

  const commentBodyInput = document.createElement("input");
  commentBodyInput.classList.add("comment-body-input");
  commentFormDiv.appendChild(commentBodyInput);

  const commentFormBreak2 = document.createElement("br");
  commentFormDiv.appendChild(commentFormBreak2);

  const commentSubmitButton = document.createElement("button");
  commentSubmitButton.classList.add("comment-submit-button");
  commentSubmitButton.innerText = "Submit Comment";
  commentFormDiv.appendChild(commentSubmitButton);

  const commentSubmitButtonLabel = document.createElement("label");
  commentSubmitButtonLabel.classList.add("comment-submit-label");
  commentSubmitButton.appendChild(commentSubmitButtonLabel);

  return commentFormDiv;
};

export { commentForm };
