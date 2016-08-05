require 'test_helper'

class LectureTest < ActiveSupport::TestCase
  setup do
    @lecture_defaults = {
      title:        'Facebook Authentication',
      topic:      'new facebook application',
      length:     '12:09',
      url:         'http://railscasts.com/episodes/360-facebook-authentication',
      date_added: Date.parse('Mon, 25 Jun 2012 00:00:00 -0700')
    }
  end

  test "should be invalid if missing required data" do
    lecture = Lecture.new
    assert !lecture.valid?
    [:title, :topic, :length, :url, :date_added].each do |field_name|
      assert lecture.errors.keys.include? field_name
    end
  end

  test "should be valid if required data exists" do
    lecture = Lecture.new(@lecture_defaults)
    assert lecture.valid?
  end

  test "should only allow one lecture with the same video url" do
    lecture = Lecture.new(@lecture_defaults)
    lecture.video_url = lectures(:fast_rails_commands).video_url
    assert !lecture.valid?
    assert lecture.errors[:video_url].include? "has already been taken"
  end
end
