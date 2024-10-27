'use client'

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { PlusCircle, Send } from 'lucide-react'
import { toast } from 'sonner'

export default function NewBlog() {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    authorName: '',
    position: '',
    readtime: '',
    sections: [{ subheading: '', content: '' }],
    tags: '',
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prevData => ({
      ...prevData,
      [name]: value,
    }))
  }

  const handleSectionChange = (index: number, e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prevData => {
      const newSections = [...prevData.sections]
      newSections[index] = { ...newSections[index], [name]: value }
      return { ...prevData, sections: newSections }
    })
  }

  const handleAddSection = () => {
    setFormData(prevData => ({
      ...prevData,
      sections: [...prevData.sections, { subheading: '', content: '' }],
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    const response = await fetch('/api/blogs', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        ...formData,
        tags: formData.tags.split(',').map((tag) => tag.trim()),
      }),
    })

    console.log("form data ", formData);

    if (response.ok) {
      toast.success('Blog posted successfully!')
      // setFormData({
      //   title: '',
      //   description: '',
      //   authorName: '',
      //   position: '',
      //   readtime: '',
      //   sections: [{ subheading: '', content: '' }],
      //   tags: '',
      // })
    } else {
      toast.error("Failed to create blog")
    }
  }

  return (
    <div className="container mx-auto py-8">
      <Card className="max-w-2xl mx-auto">
        <CardHeader>
          <CardTitle>New Blog Post</CardTitle>
          <CardDescription>Fill in the details to create a new blog post</CardDescription>
        </CardHeader>
        <form onSubmit={handleSubmit}>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="title">Title</Label>
              <Input id="title" name="title" value={formData.title} onChange={handleChange} required />
            </div>
            <div className="space-y-2">
              <Label htmlFor="description">Description</Label>
              <Textarea id="description" name="description" value={formData.description} onChange={handleChange} required />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="authorName">Author Name</Label>
                <Input id="authorName" name="authorName" value={formData.authorName} onChange={handleChange} required />
              </div>
              <div className="space-y-2">
                <Label htmlFor="position">Author Position</Label>
                <Input id="position" name="position" value={formData.position} onChange={handleChange} required />
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="readtime">Reading Time</Label>
                <Input id="readtime" name="readtime" value={formData.readtime} onChange={handleChange} required />
              </div>
              <div className="space-y-2">
                <Label htmlFor="tags">Tags</Label>
                <Input id="tags" name="tags" value={formData.tags} onChange={handleChange} required placeholder="Separate tags with commas" />
              </div>
            </div>
            {formData.sections.map((section, index) => (
              <Card key={index} className="p-4">
                <CardHeader>
                  <CardTitle className="text-lg">Section {index + 1}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                  <div className="space-y-2">
                    <Label htmlFor={`subheading-${index}`}>Subheading</Label>
                    <Input
                      id={`subheading-${index}`}
                      name="subheading"
                      value={section.subheading}
                      onChange={(e) => handleSectionChange(index, e)}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor={`content-${index}`}>Content</Label>
                    <Textarea
                      id={`content-${index}`}
                      name="content"
                      value={section.content}
                      onChange={(e) => handleSectionChange(index, e)}
                      required
                    />
                  </div>
                </CardContent>
              </Card>
            ))}
          </CardContent>
          <CardFooter className="flex justify-between">
            <Button type="button" onClick={handleAddSection} variant="outline">
              <PlusCircle className="mr-2 h-4 w-4" />
              Add Section
            </Button>
            <Button type="submit">
              <Send className="mr-2 h-4 w-4" />
              Submit
            </Button>
          </CardFooter>
        </form>
      </Card>
    </div>
  )
}