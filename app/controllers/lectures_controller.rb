class LecturesController < ApplicationController

  def index
    render json: Lecture.all
  end

  def show
    render json: Lecture.find(params[:id])
  end

  def create
    @lecture = Lecture.import_youtube(lecture_params)
    binding.pry
    @lecture.save
  end

  private
  def lecture_params
    params.require(:lecture).permit(:url, :topic)
  end
end
