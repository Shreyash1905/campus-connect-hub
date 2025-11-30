import { Search, Filter } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { eventTypes, departments } from "@/data/mockEvents";
import { cn } from "@/lib/utils";

interface EventFiltersProps {
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  selectedType: string;
  setSelectedType: (type: string) => void;
  selectedDepartment: string;
  setSelectedDepartment: (dept: string) => void;
}

export function EventFilters({
  searchQuery,
  setSearchQuery,
  selectedType,
  setSelectedType,
  selectedDepartment,
  setSelectedDepartment,
}: EventFiltersProps) {
  return (
    <div className="space-y-6">
      {/* Search */}
      <div className="relative">
        <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
        <Input
          placeholder="Search events..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="pl-12 h-12 text-base"
        />
      </div>

      {/* Type Filters */}
      <div className="space-y-3">
        <div className="flex items-center gap-2 text-sm font-medium text-muted-foreground">
          <Filter className="w-4 h-4" />
          <span>Event Type</span>
        </div>
        <div className="flex flex-wrap gap-2">
          {eventTypes.map((type) => (
            <Badge
              key={type.value}
              variant={selectedType === type.value ? "default" : "outline"}
              className={cn(
                "cursor-pointer transition-all duration-200 hover:scale-105",
                selectedType === type.value && "shadow-soft"
              )}
              onClick={() => setSelectedType(type.value)}
            >
              {type.label}
            </Badge>
          ))}
        </div>
      </div>

      {/* Department Filters */}
      <div className="space-y-3">
        <span className="text-sm font-medium text-muted-foreground">Department</span>
        <div className="flex flex-wrap gap-2">
          {departments.map((dept) => (
            <Badge
              key={dept.value}
              variant={selectedDepartment === dept.value ? "accent" : "outline"}
              className={cn(
                "cursor-pointer transition-all duration-200 hover:scale-105",
                selectedDepartment === dept.value && "shadow-soft"
              )}
              onClick={() => setSelectedDepartment(dept.value)}
            >
              {dept.label}
            </Badge>
          ))}
        </div>
      </div>
    </div>
  );
}
