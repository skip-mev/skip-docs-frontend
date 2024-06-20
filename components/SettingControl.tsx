import { FC, useCallback, useEffect, useRef, useState } from "react";
import useCopyToClipboard from "../hooks/useCopyToClipboard";
import Button from "./Button";

interface Props {
  canCopy?: boolean;
  description?: string;
  editable?: boolean;
  label: string;
  onSave?: (value: string) => void | Promise<void>;
  value: string;
}

const SettingControl: FC<Props> = ({
  canCopy,
  description,
  editable,
  label,
  onSave = () => {},
  value,
}) => {
  const [copied, setCopied] = useState(false);
  const [editing, setEditing] = useState(false);
  const [editValue, setEditValue] = useState(value);

  const inputEl = useRef<HTMLInputElement | null>(null);

  const [_, copyFn] = useCopyToClipboard();

  const handleSave = useCallback(async () => {
    await onSave(editValue);
    setEditValue("");
    setEditing(false);
  }, [editValue, onSave]);

  useEffect(() => {
    if (editing) {
      inputEl.current?.focus();
    }
  }, [editing]);

  return (
    <div className="space-y-3">
      <div className="flex items-center justify-between">
        <p className="font-bold">{label}</p>
        {editable && (
          <div>
            {editing ? (
              <div className="flex gap-2">
                <Button
                  type="ghost"
                  onClick={() => {
                    setEditing(false);
                    setEditValue(value);
                  }}
                >
                  Cancel
                </Button>
                <Button onClick={handleSave}>Save</Button>
              </div>
            ) : (
              <Button onClick={() => setEditing(true)}>Edit</Button>
            )}
          </div>
        )}
      </div>
      <div className="bg-[#F3F6F8]/5 text-base p-5 rounded-lg flex items-center justify-between gap-4 h-20 focus-within:outline outline-white/50">
        <input
          className={`w-full bg-transparent outline-none placeholder:text-white ${
            editing ? null : "hidden"
          }`}
          ref={inputEl}
          type="text"
          onChange={(e) => setEditValue(e.target.value)}
          value={editValue}
        />
        <p className={`truncate ${editing ? "hidden" : null}`}>{value}</p>
        {canCopy && !editing && (
          <div className="flex-shrink-0">
            <Button
              className="flex items-center gap-1"
              type="ghost"
              onClick={() =>
                copyFn(value).then(() => {
                  setCopied(true);
                  setTimeout(() => {
                    setCopied(false);
                  }, 3000);
                })
              }
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="w-4 h-4"
              >
                <path d="M7 3.5A1.5 1.5 0 018.5 2h3.879a1.5 1.5 0 011.06.44l3.122 3.12A1.5 1.5 0 0117 6.622V12.5a1.5 1.5 0 01-1.5 1.5h-1v-3.379a3 3 0 00-.879-2.121L10.5 5.379A3 3 0 008.379 4.5H7v-1z" />
                <path d="M4.5 6A1.5 1.5 0 003 7.5v9A1.5 1.5 0 004.5 18h7a1.5 1.5 0 001.5-1.5v-5.879a1.5 1.5 0 00-.44-1.06L9.44 6.439A1.5 1.5 0 008.378 6H4.5z" />
              </svg>
              <span>{copied ? "Copied" : "Copy"}</span>
            </Button>
          </div>
        )}
      </div>
      {description && (
        <p className="text-white/60 text-sm italic">{description}</p>
      )}
    </div>
  );
};

export default SettingControl;
