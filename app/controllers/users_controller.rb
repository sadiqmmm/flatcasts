class UsersController < ApplicationController
  def new
  end

  def show
    render json: User.find(params[:id])
  end
end
