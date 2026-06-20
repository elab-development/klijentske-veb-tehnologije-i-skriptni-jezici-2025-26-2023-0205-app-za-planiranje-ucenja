import { useState } from "react";
import { updateCurrentUser } from "~/api/auth";
import { User } from "~/models/User";

type UserModalProps = {
    user: User;
    onClose: () => void;
    onSaved?: (user: User) => void;
};

export function UserModal({ user, onClose, onSaved }: UserModalProps) {
    const [error, setError] = useState("");

    async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();
        setError("");

        const formData = new FormData(event.currentTarget);

        const full_name = String(formData.get("full_name"));
        const biography = String(formData.get("biography"));
        const university_name = String(formData.get("university_name"));
        const profile_pic_url = String(formData.get("profile_pic_url"));

        if (!full_name || !university_name) {
            setError("Full name and university name are required.");
            return;
        }

        const payload = {
            full_name,
            biography: biography || null,
            university_name,
            profile_pic_url: profile_pic_url || null,
        };

        try {
            const updatedUser = await updateCurrentUser(payload);

            localStorage.setItem("user", JSON.stringify(updatedUser));
            onSaved?.(new User(updatedUser));
            window.dispatchEvent(new Event("userUpdated"));
        } catch {
            setError("Could not update profile.");
        }

        onClose();
    }

    return (
        <div className="modalHolder" role="presentation">
            <div className="subjectModal" role="dialog" aria-modal="true">
                <div className="subjectModalHeader">
                    <h2>Edit Profile</h2>
                    <button
                        className="subjectModalCloseButton"
                        type="button"
                        aria-label="Close profile modal"
                        onClick={onClose}
                    >
                        <span aria-hidden="true" />
                    </button>
                </div>

                <form className="subjectModalForm" onSubmit={handleSubmit}>
                    <div className="subjectModalGrid">
                        <label className="subjectModalField">
                            <span>FULL NAME</span>
                            <input
                                type="text"
                                name="full_name"
                                defaultValue={user.full_name}
                            />
                        </label>

                        <label className="subjectModalField">
                            <span>UNIVERSITY NAME</span>
                            <input
                                type="text"
                                name="university_name"
                                defaultValue={user.university_name}
                            />
                        </label>

                        <label className="subjectModalField">
                            <span>PROFILE IMAGE URL</span>
                            <input
                                type="text"
                                name="profile_pic_url"
                                defaultValue={user.profile_pic_url ?? ""}
                                placeholder="https://example.com/profile.png"
                            />
                        </label>

                        <label className="subjectModalField">
                            <span>BIOGRAPHY</span>
                            <textarea
                                name="biography"
                                defaultValue={user.biography ?? ""}
                                placeholder="Write something about yourself..."
                            />
                        </label>
                    </div>

                    {error && (
                        <p className="text-red-500 text-sm font-medium">
                            {error}
                        </p>
                    )}

                    <div className="subjectModalFooter">
                        <button
                            className="subjectModalCancelButton"
                            type="button"
                            onClick={onClose}
                        >
                            Cancel
                        </button>

                        <button className="subjectModalPrimaryButton" type="submit">
                            Save
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}