export type UserData = {
  id: string;
  full_name: string;
  email: string;
  biography: string | null;
  university_name: string;
  profile_pic_url: string | null;
  created_at: string;
  updated_at: string;
};

export class User {
  id: string;
  full_name: string;
  email: string;
  biography: string | null;
  university_name: string;
  profile_pic_url: string | null;
  created_at: string;
  updated_at: string;

  constructor(data: UserData) {
    this.id = data.id;
    this.full_name = data.full_name;
    this.email = data.email;
    this.biography = data.biography;
    this.university_name = data.university_name;
    this.profile_pic_url = data.profile_pic_url;
    this.created_at = data.created_at;
    this.updated_at = data.updated_at;
  }

  get displayName() {
    return this.full_name;
  }

  get profileImage() {
    return this.profile_pic_url || "/images/profile.png";
  }

  get joinedDate() {
    return new Date(this.created_at).toLocaleDateString("en-US", {
      month: "short",
      year: "numeric",
    });
  }
}