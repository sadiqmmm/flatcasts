require 'test_helper'

class LectureTest < ActiveSupport::TestCase
  setup do
    @lecture_defaults = {
      title:        'Facebook Authentication',
      topic:      'This will show how to create a new facebook application and configure it. Then add some authentication with the omniauth-facebook gem and top it off with a client-side authentication using the JavaScript SDK.',
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
    lecture.url = lectures(:How_To_Create_Music_With_Code).url
    assert !lecture.valid?
    assert lecture.errors[:url].include? "has already been taken"
  end
end
