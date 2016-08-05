class Lecture < ActiveRecord::Base
  validates_presence_of :title, :topic, :length, :url, :date_added
  validates_uniqueness_of :url
end
