class Lecture < ActiveRecord::Base
  validates_presence_of :title, :topic, :duration, :url, :published, :embed
  validates_uniqueness_of :url

  def self.import_youtube(url, topic)

    binding.pry
    video = Yt::Video.new url: url
    title = video.title
    topic = topic
    url = url
    duration = video.duration
    published = video.published_at
    embed = video.embed_html

    lecture.new(title: title, topic: topic, url: url, duration: duration, published: published, embed: embed)
  end

  # https://www.youtube.com/watch?v=t2A6xPbh0I8

end
