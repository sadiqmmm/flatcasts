require 'test_helper'

class ApiLecturesTest < ActionDispatch::IntegrationTest
  test "get /api/lectures.json" do
    get "/api/lectures.json"
    assert_response :success
    assert body == Lecture.all.to_json
    lectures = JSON.parse(response.body)
    assert lectures.size == 2 # because there are three fixtures (see lectures.yml)
    assert lectures.any? { |s| s["title"] == lectures(:How_To_Create_Music_With_Code).title }
  end

  test "get /api/lectures/:id" do
    lecture = lectures(:How_To_Create_Music_With_Code)
    get "/api/lectures/#{lecture.id}.json"
    assert_response :success
    assert body == lecture.to_json
    assert JSON.parse(response.body)["title"] == lecture.title
  end
end
