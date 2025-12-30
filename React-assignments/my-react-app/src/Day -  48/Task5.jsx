import { useState } from "react";

function PasswordMatch() {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const isMatch =
    password && confirmPassword && password === confirmPassword;

  return (
    <div>
      <div>
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>

      <div>
        <input
          type="password"
          placeholder="Confirm Password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
        />
      </div>

      {confirmPassword && (
        <p style={{ color: isMatch ? "green" : "red" }}>
          {isMatch ? "Passwords match ✅" : "Passwords do not match ❌"}
        </p>
      )}
    </div>
  );
}

export default PasswordMatch;
