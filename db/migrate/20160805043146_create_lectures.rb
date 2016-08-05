class CreateLectures < ActiveRecord::Migration
  def change
    create_table :lectures do |t|
      t.string :title
      t.string :topic
      t.string :url
      t.string :length

      t.timestamps null: false
    end
  end
end
