class AddUpvotesToLecture < ActiveRecord::Migration
  def change
    add_column :lectures, :upvotes, :integer, default: 0
    add_column :lectures, :downvotes, :integer, default: 0
  end
end
