class LecturesController < ApplicationController

  def index
    render json: Lecture.all
  end

  def show
    render json: Lecture.find(params[:id])
  end

  def create
    url = params[:data][:url]
    topic = params[:data][:topic]
    lecture = Lecture.import_youtube(url, topic)
    render json: lecture
  end

  def add_favorite
    lecture = Lecture.find(params[:id])
    user = User.find(params[:userid])
  end
end
