class PostsController < ApplicationController
  respond_to :json
  def index
    posts = Post.all
    respond_with(posts) do |format|
      format.json { render :json => posts }
    end
    
  end
  
  def show
      post = Post.find(params[:id])
      respond_with(post) do |format|
        format.json { render :json => post }
      end
  end
   
  def create
    new_post = Post.new
    new_post.title = params[:new_post][:title][0...250] # Get only first 250 characters
    new_post.content = params[:new_post][:content]
    
    # Confirm post is valid and save or return HTTP error
    if new_post.valid?
      new_post.save!
    else
      render "public/422", :status => 422
      return
    end

    # Respond with newly created post in json format
    respond_with(new_post) do |format|
      format.json { render :json => new_post.as_json }
    end
    
    return
  end
  
  def update
    edit_post = Post.find(params[:id])
    edit_post.title = params[:edit_post][:title][0...250] # Get only first 250 characters
    edit_post.content = params[:edit_post][:content]
    
    # Confirm post is valid and save or return HTTP error
    if edit_post.valid?
      edit_post.save!
    else
      render "public/422", :status => 422
      return
    end

    # Respond with newly created post in json format
    respond_with(edit_post) do |format|
      format.json { render :json => edit_post.as_json }
    end
    
    return
  end
end
