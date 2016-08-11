class Lecture < ActiveRecord::Base
  validates_presence_of :title, :topic, :duration, :url, :published, :embed, :video_id
  validates_uniqueness_of :video_id

  def self.import_youtube(url, topic)
    video = Yt::Video.new url: url
    title = video.title
    topic = topic
    url = url
    duration = [video.duration / 3600, video.duration / 60 % 60, video.duration % 60].map { |t| t.to_s.rjust(2,'0') }.join(':')
    published = video.published_at.in_time_zone("Eastern Time (US & Canada)").strftime("%B %e, %Y at %I:%M %p") + " EST"
    embed = video.embed_html
    video_id = video.id

    Lecture.create(title: title, topic: topic, url: url, duration: duration, published: published, embed: embed, video_id: video_id)
  end

  def add_vote
    self.upvotes += 1
    self.save
  end
end
