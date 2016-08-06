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
    Lecture.import_youtube(url, topic)
  end
end
