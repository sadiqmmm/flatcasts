class CreateLectures < ActiveRecord::Migration
  def change
    create_table :lectures do |t|
      t.string :title
      t.string :topic
      t.string :url
      t.string :duration
      t.string :published
      t.string :embed
      t.string :video_id

      t.timestamps null: false
    end
  end
end
