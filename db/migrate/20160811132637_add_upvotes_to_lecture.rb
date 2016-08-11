class AddUpvotesToLecture < ActiveRecord::Migration
  def change
    add_column :lectures, :votes, :integer, default: 0
  end
end
