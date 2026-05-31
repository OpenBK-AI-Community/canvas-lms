# frozen_string_literal: true

require "spec_helper"

describe Test::NewQuizItemsController, type: :request do
  describe "GET show" do
    let(:response_body) { [{ id: "item-1", entry_type: "Item" }].to_json }
    let(:upstream_response) do
      instance_double(Net::HTTPResponse, code: "200", body: response_body).tap do |response|
        allow(response).to receive(:[]).with("Content-Type").and_return("application/json")
      end
    end

    it "forwards the New Quiz items response" do
      allow(CanvasHttp).to receive(:get)
        .with(
          "http://www.example.com/api/quiz/v1/courses/COURSE_ID/quizzes/ASSIGNMENT_ID/items",
          { "Authorization" => "Bearer CANVAS_TOKEN" }
        )
        .and_return(upstream_response)

      get "/test-new-quiz-items"

      expect(response).to have_http_status :ok
      expect(response.media_type).to eql("application/json")
      expect(response.body).to eql(response_body)
    end
  end
end