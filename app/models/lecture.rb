class Lecture < ActiveRecord::Base
  validates_presence_of :title, :topic, :length, :url, :date_added
  validates_uniqueness_of :url

  def self.import_youtube(url)

    binding.pry
    video = Yt::Video.new url: url
    title = video.title
    duration = video.duration
    published = video.published_at
    url = url
    embed = video.embed_html

    # lecture.new(title: video.title, topic: 'TBD', url: url, )
  end

  # https://www.youtube.com/watch?v=t2A6xPbh0I8

end
