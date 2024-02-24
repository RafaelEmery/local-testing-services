"""
TODO: Add a description of what this file does
FIXME: Run locust correctly
"""

from locust import HttpUser, task

class StressUser(HttpUser):
    @task
    def call_root(self):
        self.client.get("/")