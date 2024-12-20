module.exports = {
    extends: ["@commitlint/config-conventional"],
    rules: {
      "type-enum": [
        2,
        "always",
        [
          "feat", // เพิ่มฟีเจอร์ใหม่
          "fix", // แก้บัค
          "docs", // อัปเดตเอกสาร
          "style", // ปรับปรุงรูปแบบโค้ด (ไม่มีผลต่อฟังก์ชันการทำงาน)
          "refactor", // ปรับปรุงโครงสร้างโค้ด
          "perf", // ปรับปรุงประสิทธิภาพ
          "test", // เพิ่มการทดสอบ
          "build", // การตั้งค่า build
          "ci", // การตั้งค่า CI/CD
          "chore", // งานที่ไม่เกี่ยวกับโค้ด
          "revert", // ย้อน commit
        ],
      ],
      "subject-case": [2, "always", "sentence-case"], // ข้อความ subject ต้องขึ้นต้นด้วยตัวพิมพ์ใหญ่
    },
  };
  