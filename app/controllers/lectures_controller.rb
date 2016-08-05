class LecturesController < ApplicationController

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
