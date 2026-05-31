# frozen_string_literal: true

class Test::NewQuizItemsController < ApplicationController
  COURSE_ID = "1"
  ASSIGNMENT_ID = "1"
  CANVAS_TOKEN = "Xu4fDanmRuBPhxH3XuBXmGZUX2xYnPFHDzmcYX6kA2KrTn9BATDHGvn4eRTZP6xQ"

  skip_before_action :load_user, :require_user

  def show
    response = CanvasHttp.get(
      "#{request.base_url}/api/quiz/v1/courses/#{COURSE_ID}/quizzes/#{ASSIGNMENT_ID}/items",
      { "Authorization" => "Bearer #{CANVAS_TOKEN}" }
    )

    render body: response.body,
           status: response.code.to_i,
           content_type: response["Content-Type"].presence || "application/json"
  end
end